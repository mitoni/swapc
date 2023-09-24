const tag = "sw-";
const thisTag = "$this";

const directEvents = [
    "click",
    "mouseenter",
    "mouseleave",
]

const indirectEvents = [
    "enter",
    "leave"
]

function id(t = 6) {
    return crypto.getRandomValues(new Uint8Array(t)).reduce(((t, e) => t += (e &= 63) < 36 ? e.toString(36) : e < 62 ? (e - 26).toString(36).toUpperCase() : e > 62 ? "-" : "_"), "");
}

function assignEvents() {
    console.log(id());
    for (const event of directEvents) {
        const attr = tag + event;
        const nodes = document.querySelectorAll(`[${attr}]`);

        for (const node of nodes) {
            // assign id 
            const nodeId = id();
            node.setAttribute(`${tag}id`, nodeId);

            let target = node;

            let targetAttr = node.getAttribute(`${tag}target`);
            if (targetAttr) {
                targetAttr = targetAttr.replace(thisTag, `[${tag}id="${nodeId}"]`);
                target = document.querySelector(targetAttr);
            }

            const cls = node.getAttribute(attr);
            const splitted = cls.split(" ");

            const add = [];
            const remove = [];
            const toggle = [];
            for (const cls of splitted) {
                switch (cls[0]) {
                    case "-":
                        remove.push(cls.substring(1));
                        break;
                    case "+":
                        add.push(cls.substring(1));
                        break;
                    default:
                        toggle.push(cls.substring(0));
                        break;
                };
            }

            node.addEventListener(event, function() {
                if (add.length) {
                    target.classList.add(...add);
                }

                if (remove.length) {
                    target.classList.remove(...remove);
                }

                if (toggle.length) {
                    target.classList.toggle(...toggle);
                }
            })
        }
    }
}

window.onload = assignEvents;
