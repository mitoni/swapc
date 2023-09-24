const tag = "sw-";

const directEvents = [
    "click",
    "mouseenter",
    "mouseleave",
]

const indirectEvents = [
    "enter",
    "leave"
]

function assignEvents() {
    for (const event of directEvents) {
        const attr = tag + event;
        const nodes = document.querySelectorAll(`[${attr}]`);

        for (const node of nodes) {
            let target = node;

            const targetAttr = node.getAttribute(`${tag}target`);
            if (targetAttr) {
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
                        remove.push(cls.substring(1))
                        break;
                    case "+":
                        add.push(cls.substring(1))
                        break;
                    default:
                        toggle.push(cls.substring(0))
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
