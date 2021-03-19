let files = 0;
let id = 0;
const colorArray = ['#BF616A', '#D08770', '#EBCB8B', '#A3BE8C', '#B48EAD']

const grow = (ele: HTMLTextAreaElement) => {
    ele.style.height = '1em'
    ele.style.height = ele.scrollHeight + 'px'
}

const genLinum = (ele: HTMLTextAreaElement, id: number) => {
    const linums = ele.value.split(/\r\n|\r|\n/).length;
    const linumElement = document.getElementById(`linum${id}`) as HTMLDivElement;
    let linumHTML = '';
    for (let i = 0; i < linums; i++) {
        linumHTML += `<p>${i + 1}</p>`
    }
    linumElement.innerHTML = linumHTML;
}
const createNewCard = () => {
    files += 1;
    const div = document.createElement('div');
    div.classList.add('row')
    div.innerHTML = `
    <div class="twelve columns card">
        <div class="title">
            <span style="color: ${colorArray[id % 5]}" class="iconify" data-width="2em" data-height="2em" data-icon="clarity:file-line"></span>
            <input class="title-input" id="title${id}" placeholder="Untitled Text Document"></input>
            <span class="iconify cardtrash" onclick="removeCard(this)" data-width="2em" data-height="2em" data-icon="clarity:trash-line"></span>
        </div>
        <div class="content">
            <div class="linum" id="linum${id}">
                <p>1</p>
            </div>
            <div class="content-text">
                <textarea
                        class="textbox"
                        spellcheck="false"
                        id="text${id}"
                        oninput="grow(this);genLinum(this, ${id})"
                ></textarea>
            </div>
        </div>
    </div>
    `
    const textbox = div.querySelector(`#text${id}`)
    if (textbox){
        textbox.addEventListener("keydown", function(this: any, e:any){
            if (e.keyCode === 9) {
                let start = this.selectionStart;
                let end = this.selectionEnd;

                let target = e.target;
                let value = target.value;

                target.value = value.substring(0, start) + `    ` + value.substring(end)

                this.selectionStart = this.selectionEnd = start + 4;

                e.preventDefault()
            }
        })}

    const fileDiv = document.getElementById('files')
    if (fileDiv){fileDiv.appendChild(div)}
    id += 1;

}

const removeCard = (card: HTMLElement) => {
    if (card.parentElement){
        if (card.parentElement.parentElement){
            if (card.parentElement.parentElement.parentElement){
                card.parentElement.parentElement.parentElement.remove()
            }
        }
    }
}