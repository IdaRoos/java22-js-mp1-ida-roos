
// DEL ETT

// Skapa fem h1 element i en loop (loopar fem gånger)
for (let i = 1; i <= 5; i++) {
    const h1 = document.createElement('h1');
    // Lägg till text i h1 elementen
    h1.innerText = 'Rad ' + i;
    // Ändra färg påtexten
    h1.style.color = '#7D81E1';
    // Positionera texten till mitten
    h1.style.textAlign = 'center';
    // Textstorleken ökar med 7*1/2/3/4/5
    h1.style.font = `bold ${7 * i}px Times New Roman`;
    // Skapa variabel hue som börjar på 120 och ökar med 20
    const hue = 100 + ((i * 20));
    h1.style.backgroundColor = `hsl(${hue},100%, 85%)`;
    // console.log(hue);
    // Lägg till h1-elementen till body
    document.body.append(h1);
}

// DEL TVÅ

// Skapa div-element
const div = document.createElement('div');
// Lägg till div-element i body
document.body.append(div);
div.style.display = 'flex';
div.style.border = '1px solid';
div.style.justifyContent = 'center';

// Skapa tre ol-list med loop
for (let i = 0; i < 3; i++) {
    const list = document.createElement('ol');
    list.style.backgroundColor = '#a8a8f0';
    list.style.padding = '10px';
    list.style.margin = '70px';
    list.style.width = '50px';
    list.style.marginLeft = '200px';
    list.style.marginRight = '200px';


    // Lägg till list-element i div
    div.append(list);

    // Om i = 0, skapa 10 listitems i loop, 0-9
    for (let j = 0; j < 10; j++) {

        if (i === 0) {
            const item = document.createElement('li');
            // Lägg till item-elementet i list
            list.append(item);
            item.innerText = `${j}`;
            item.style.listStyle = 'none';
            item.style.padding = '2px';
            item.style.color = 'white';

            if (j % 2 === 0 && j !== 4) {
                item.style.backgroundColor = 'black';

            }
            else if (j % 2 === 1 && j !== 4) {
                item.style.backgroundColor = 'white';
                item.style.color = 'black';

            }

        }
        // Kolla om i är 1 (andra listan)
        else if (i === 1) {
            const item2 = document.createElement('li');
            list.append(item2);
            item2.innerText = `${9 - j}`;
            item2.style.listStyle = 'none';
            item2.style.padding = '2px';
            item2.style.textAlign = 'center';
            item2.style.color = 'white';

            if (j % 2 === 0 && j !== 1) {
                item2.style.backgroundColor = 'white';
                item2.style.color = 'black';

            }

            else if (j % 2 === 1 && j !== 1) {
                item2.style.backgroundColor = 'black';

            }
        }
        // Kolla om i = 2 (tredje listan)
        else if (i === 2) {

            // Skapa en array
            const arrItem3 = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];

            // Om i = 2, skapa 10 listitems genom att loopa igenom arrayen, 0-9
            const item3 = document.createElement('li');
            list.append(item3);
            // Lägg till text i item-elementet bestående av indexvärdet i arrayen
            item3.innerText = `${arrItem3[j]}`;
            item3.style.listStyle = 'none';
            item3.style.textAlign = 'end';
            item3.style.padding = '2px';

            if (j % 2 === 0 && j !== 5) {
                item3.style.backgroundColor = 'black';
                item3.style.color = 'white';
            }
            else if (j % 2 == 1 && j !== 5) {
                item3.style.backgroundColor = 'white';

            }
        }
    }
}