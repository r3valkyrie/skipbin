let files = 0;
let id = 0;

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
            <span class="iconify" data-width="1.5em" data-height="1.5em" data-icon="akar-icons:file"></span>
            <p><b>title.txt</b></p>
            <span class="iconify cardtrash" onclick="removeCard(this)" data-width="1.5em" data-height="1.5em" data-icon="akar-icons:trash-can"></span>
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

createNewCard()