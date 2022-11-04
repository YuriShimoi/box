let holding = null;

let cardbox = document.getElementById("cardbox");
cardbox.onmousedown = (e) => {
    cardbox.classList.remove("run-shrink-and-expand");
    void cardbox.offsetWidth;
    cardbox.classList.add("run-shrink-and-expand");

    // create and hold new item
    let newitem = new Item();
    holding = newitem.instance;

    centerHoldOnMouse(e);
};

document.body.onmouseup = document.body.onmouseleave = () => {
    // unhold item
    holding = null;
};

document.body.onmousemove = (e) => {
    // move item
    if(holding !== null) centerHoldOnMouse(e);
};

function centerHoldOnMouse(cursor) {
    let pos = roundPosition(cursor.clientX, cursor.clientY);
    holding.style.top  = `${pos[1] - 50}px`;
    holding.style.left = `${pos[0] - 50}px`;
}

function holdMe(instance) {
    holding = instance;
}

function roundPosition(x, y) {
    let tile_size = 21;

    let xr = x % tile_size;
    x = x - xr;
    if(xr > (tile_size/2)) x += tile_size;

    let yr = y % tile_size;
    y = y - yr;
    if(yr > (tile_size/2)) y += tile_size;

    return [x, y];
}