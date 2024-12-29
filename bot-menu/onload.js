function AddClass(icon, className)
{
    const container = document.querySelector('.container');
    const newItem = document.createElement('div');
    newItem.className = 'class';
    newItem.innerHTML = `
        <img class="icon" src="${icon}">
            ${className}
    `;
    container.appendChild(newItem);
}
function AddItem(icon, name, desc)
{
    const container = document.querySelector('.container');
    const newItem = document.createElement('div');
    newItem.className = 'item';
    newItem.innerHTML = `
    <img class="icon" src="${icon}">
    ${name}
    <span style="color: rgba(255, 255, 255, 0.5)">${desc}</span>
    `;
    container.appendChild(newItem);
}
function onload()
{
    AddClass("src/aperture.svg", "AI")
    AddItem("src/at-sign.svg", "at我", "和我聊天")
    AddClass("src/tool.svg", "Toolkit")
    AddItem("src/download-cloud.svg", "download", "下载脚本")
    AddItem("src/disc.svg", "can can ps bar", "查看PS吧热帖")
    AddItem("src/trash-2.svg", "garbage", "垃圾分类")
    AddItem("src/refresh-cw.svg", "reload", "重载插件")
    AddItem("src/file-text.svg", "hanyu", "字词查询")
    AddItem("src/trash-2-2.svg", "threadlist", "查看正在进行的作业")
    AddItem("src/smile.svg", "emoji", "将两个Emoji合成")
    AddClass("src/tool-2.svg", "Manage (Admin)")
    AddItem("src/download-cloud-2.svg", "allow", "允许脚本")
}