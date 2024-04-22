function HideAll(ID){
    // let descriptions = document.getElementsByClassName('response');
    // let minuses =  document.getElementsByClassName('minus');
    // let pluses =  document.getElementsByClassName('plus');
    //
    //
    // for(let item = 0; item < descriptions.length; item++) {
    //     descriptions[item].classList.add('hidden');
    // }
    // for(let item = 0; item < minuses.length; item++) {
    //     minuses[item].classList.add('hidden');
    // }
    // for(let item = 0; item < pluses.length; item++) {
    //     pluses[item].classList.remove('hidden');
    // }


    let quests = document.querySelector('.questions-list');

    let quest = quests.children[ID];
    descp = quest.children[1];

    names = quest.children[0];
    icons = names.children[1];
    plus_i = icons.children[0];
    minus_i = icons.children[1];
    plus_i.classList.remove('hidden')
    minus_i.classList.add('hidden')

    descp.classList.add('hidden')
}

function ShowId(ID){
    let quests = document.querySelector('.questions-list');

    let quest = quests.children[ID];
    descp = quest.children[1];

    names = quest.children[0];
    icons = names.children[1];
    plus_i = icons.children[0];
    minus_i = icons.children[1];
    plus_i.classList.add('hidden')
    minus_i.classList.remove('hidden')

    descp.classList.remove('hidden')

    // for(let child of quests.children){
    //    for (let subChild of child.children){
    //        console.log(subChild)
    //    }
    // }


}