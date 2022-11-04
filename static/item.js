class Item {
    static ITEM_BOX_ID = "itembox";
    static _ID = 0;

    constructor() {
        this.id = Item._ID++;
        this.instance = this.createOnHTML();
    }

    createOnHTML() {
        let itemdiv = document.createElement("DIV");
        itemdiv.classList.add("item");
        itemdiv.style.backgroundImage = `url(https://picsum.photos/80.webp?random=${this.id})`;
        itemdiv.onmousedown = () => holdMe(itemdiv);
        document.getElementById(Item.ITEM_BOX_ID).appendChild(itemdiv);
        return itemdiv;
    }
}