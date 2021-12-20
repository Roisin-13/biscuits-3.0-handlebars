const context = {

    biscuits: [
        {
            //--shortbread
            imageSrc: 'https://www.acceptcookies.uk/1images/photos/biscuits/shortbread.jpg',
            name: 'Shortbread',
            link: 'https://www.acceptcookies.uk/1biscuits/shortbread.html'
        },
        //--cookies
        {
            imageSrc: 'https://www.acceptcookies.uk/1images/photos/biscuits/chocolateChip.jpg',
            name: 'Chocolate Chip Cookies',
            link: 'https://www.acceptcookies.uk/1biscuits/chocolateChipCookies.html'
        },
        //--raspberry
        {
            imageSrc: 'https://www.acceptcookies.uk/1images/photos/biscuits/Hobnob_270x270.jpg',
            name: 'Raspberry Crunch',
            link: 'https://www.acceptcookies.uk/1biscuits/raspberryCrunch.html'
        },
        //--lemon
        {
            imageSrc: 'https://www.acceptcookies.uk/1images/photos/biscuits/bluelemon.jpg',
            name: 'Lemon & Blueberry',
            link: 'https://www.acceptcookies.uk/1biscuits/lemonBlueberry.html'
        }
    ]
};

const templateElement = document.getElementById("templateHB");
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource);

const compiledHtml = template(context);

document.getElementById("biscuit-box").innerHTML = compiledHtml;