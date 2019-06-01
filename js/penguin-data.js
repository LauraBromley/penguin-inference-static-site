/* Static data containing information about selected penguins, including image with credit. */

var PenguinData = function() {
    var self = this;

    self.crestPenguins = ["snares", "rockhopper", "erect_crested", "macaroni","royal", "fiordland"];
    self.amPenguins = ["humboldt", "magellanic", "galapagos", "african"];
    self.anPenguins = ["emperor", "king", "adelie", "gentoo", "chinstrap"];
    self.ausPenguins = ["little", "yellow_eyed"];

    self.getPenguin = function(category){
        switch(category) {
            case "snares" : return Snares;
            case "adelie" : return Adelie;
            case "king" : return King;
            case "emperor" : return Emperor;
            case "rockhopper" : return Rockhopper;
            case "gentoo" : return Gentoo;
            case "chinstrap" : return Chinstrap;
            case "african" : return African;
            case "erect_crested" : return ErectCrested;
            case "galapagos" : return Galapagos;
            case "humboldt" : return Humboldt;
            case "little" : return Little;
            case "macaroni" : return Macaroni;
            case "magellanic" : return Magellanic;
            case "royal" : return Royal;
            case "fiordland": return Fiordland;
            case "yellow_eyed": return YellowEyed;
            default: return null;
        }
    }
    
    const Snares = {
        title: "Snares Penguin",
        img_src: "images/snares.jpg",
        photo_by : "lin padgham",
        photo_by_link: "https://www.flickr.com/photos/22527731@N05",
        orig_photo_link: "https://www.flickr.com/photos/22527731@N05/2204677321",
        info: "The Snares penguin is a medium-small yellow-crested penguin. It has dark blue-black upperparts and white underparts. It has a bright yellow          eyebrow-stripe which extends over         the eye to form a drooping, bushy crest. It has bare pink skin at the base of its large red-brown bill.",
        location: "The Snares islands, New Zealand.",
        status: "Vulnerable"
    }

    const King = {
        title: "King Penguin",
        img_src: "images/king.jpg",
        photo_by : "David Stanley",
        photo_by_link: "https://www.flickr.com/photos/davidstanleytravel/",
        orig_photo_link: "https://www.flickr.com/photos/davidstanleytravel/15798589947",
        info: "The king penguin is the second largest species of penguin, similar in appearance to the emperor penguin. It has a broad orange cheek patch contrasting       with surrounding dark feathers, and yellow-orange plumage at the top of the chest.",
        location: "Sub-Antarctic islands at the northern reaches of Antarctica, South Georgia, and other temperate islands of the region.",
        status: "Least concern"
    }

    const Emperor = {
        title: "Emperor Penguin",
        img_src: "images/emperor.jpg",
        photo_by : "Christopher Michel",
        photo_by_link: "https://www.flickr.com/photos/cmichel67/",
        orig_photo_link: "https://www.flickr.com/photos/cmichel67/11278910216",
        info: "The emperor penguin is the tallest and heaviest penguin species. Feathers of the head and back are black and sharply delineated from the white belly,        pale-yellow breast and bright-yellow ear patches.",
        location: "Antarctica",
        status: "Near threatened"
    }

    const Rockhopper = {
        title: "Rockhopper Penguin",
        img_src: "images/rockhopper.jpg",
        photo_by : "Pablo Fernicola",
        photo_by_link: "https://www.flickr.com/photos/fernicola/",
        orig_photo_link: "https://www.flickr.com/photos/fernicola/8329917917",
        info: "Rockhopper penguins have black bodies and flippers, white bellies, feathered  crest on head and red eyes. The name comes from the way they move about        on the rocky shorelines they breed in.",
        location: "Sub-Antarctic islands, southern tip of South America, islands in South Atlantic and Indian Ocean. Also New Zealand, but numbers have declined.",
        status: "Vulnerable"
    }

    const Gentoo = {
        title: "Gentoo Penguin",
        img_src: "images/gentoo.jpg",
        photo_by : "Laura Bromley",
        photo_by_link: "https://www.flickr.com/photos/146843906@N04/",
        orig_photo_link: "https://www.flickr.com/photos/146843906@N04/47811203742",
        info: "The gentoo penguin has a wide white stripe extending like a bonnet across the top of its head and its bright orange-red bill. It has pale whitish-pink   webbed feet and a fairly long tail.",
        location: "Sub-antartcic islands and the Antartctic peninsular.",
        status: "Least concern"
    }

    const Adelie = {
        title: "Adelie Penguin",
        img_src: "images/adelie.jpg",
        photo_by : "David Cook",
        photo_by_link: "https://www.flickr.com/photos/kookr/",
        orig_photo_link: "https://www.flickr.com/photos/kookr/14653072433",
        info: "Adelie penguins are mid-sized, with a distinctive white ring surrounding the eye and the feathers at the base of the bill. These long feathers hide most of the red bill. The tail is a little longer than other penguins' tails.",
        location: "Antarctica",
        status: "Least concern"
    }

    const Chinstrap = {
        title: "Chinstrap Penguin",
        img_src: "images/chinstrap.jpg",
        photo_by : "Scott Ableman",
        photo_by_link: "https://www.flickr.com/photos/ableman/",
        orig_photo_link: "https://www.flickr.com/photos/ableman/24224787651",
        info: "The chinstrap penguin's name derives from the narrow black band under its head which makes it appear as if it were wearing a black helmet.",
        location: "Southern Pacific and the Antarctic Ocean.",
        status: "Least concern"
    }

    const African = {
        title: "African Penguin",
        img_src: "images/african.jpg",
        photo_by : "Bernard DUPONT",
        photo_by_link: "https://www.flickr.com/photos/berniedup/",
        orig_photo_link: "https://www.flickr.com/photos/berniedup/32780193212",
        info: "The African penguin has distinctive pink patches of skin above the eyes and a black facial mask. It's white belly is spotted and marked with a black band. It is simialar in appearance to the Humboldt and Magellanic penguins.",
        location: "South Africa.",
        status: "Endangered"
    }

    const ErectCrested = {
        title: "Erect Crested Penguin",
        img_src: "images/erect_crested.jpg",
        photo_by : "https://www.flickr.com/photos/nznavy/",
        photo_by_link: "Royal New Zealand Navy",
        orig_photo_link: "https://www.flickr.com/photos/nznavy/39811757054",
        info: "The erect crested penguin has black upper parts, white underparts and a yellow eye stripe and crest.",
        location: "Bounty and Antipodes Islands, New Zealand.",
        status: "Endangered"
    }

    const Fiordland = {
        title: "Fiordland Penguin",
        img_src: "images/fiordland.jpg",
        photo_by : "travelwayoflife",
        photo_by_link: "https://www.flickr.com/photos/travelwayoflife",
        orig_photo_link: "https://www.flickr.com/photos/travelwayoflife/7169122386",
        info: "The Fiordland penguin is a medium-sized penguin. It has dark, bluish-grey upperparts with a darker head, and white underparts. Its broad, yellow eyebrow-stripe extends over the eye and drops down the neck. It is similar to the erect crested penguin and Snares penguin.",
        location: "New Zealand.",
        status: "Vulnerable"
    }

    const Galapagos = {
        title: "Galapagos Penguin",
        img_src: "images/galapagos.jpg",
        photo_by : "Allan Harris",
        photo_by_link: "https://www.flickr.com/photos/allan_harris/",
        orig_photo_link: "https://www.flickr.com/photos/allan_harris/4187550911/",
        info: "The Galapagos penguin is the second smallest species of penguin. They have a black head with a white border running from behind the eye, and two black bands across the breast", 
        location: "Galapagos Islands (the only penguin found north of the equator).",
        status: "Endangered"
    }

    const Humboldt = {
        title: "Humboldt Penguin",
        img_src: "images/humboldt.jpg",
        photo_by : "OZinOH",
        photo_by_link: "https://www.flickr.com/photos/75905404@N00/",
        orig_photo_link: "https://www.flickr.com/photos/75905404@N00/5630663841",
        info: "Humboldt penguins have a black head with a white border that runs from behind the eye. They have blackish-grey upperparts and whitish underparts, with a black breast-band. They are similar in appearance to the African penguin and the Magellanic penguin.",
        location: "Chile and Peru.",
        status: "Vulnerable"
    }

    const Little = {
        title: "Little Penguin",
        img_src: "images/little.jpg",
        photo_by : "Harvey Barrison",
        photo_by_link: "https://www.flickr.com/photos/hbarrison/",
        orig_photo_link: "https://www.flickr.com/photos/hbarrison/31863833737",
        info: "The little penguin is the smallest penguin species. They are also known as blue penguins due to their slate-blue plumage.",
        location: "Coastlines of Southern Australia and New Zealand.",
        status: "Least concern"
    }

    const Macaroni = {
        title: "Macaroni Penguin",
        img_src: "images/macaroni.jpg",
        photo_by : "Dave M",
        photo_by_link: "https://www.flickr.com/photos/asherian/",
        orig_photo_link: "https://www.flickr.com/photos/asherian/8611766575/",
        info: "The macaroni penguin has a distinctive yellow crest, and the face and upperparts are black and sharply delineated from the white underparts. It is very closely related to the royal penguin.",
        location: "Subantarctic islands, Antarctic Peninsula.",
        status: "Vulnerable"
    }

    const Magellanic = {
        title: "Magellanic Penguin",
        img_src: "images/magellanic.jpg",
        photo_by : "Laura Bromley",
        photo_by_link: "https://www.flickr.com/photos/146843906@N04",
        orig_photo_link: "https://www.flickr.com/photos/146843906@N04/47863271711",
        info: "The Magellanic penguin has two black bands between the head and the breast, with the lower band shaped in an inverted horseshoe. It is similar in appearance to the African penguin and the Humboldt penguin.",
        location: "Coastal Argentina, Chile and the Falkland Islands.",
        status: "Near Threatened"
    }

    const Royal = {
        title: "Royal Penguin",
        img_src: "images/royal.jpg",
        photo_by : "Natalie Tapson",
        photo_by_link: "https://www.flickr.com/photos/40325561@N04/",
        orig_photo_link: "https://www.flickr.com/photos/40325561@N04/14525768048/",
        info: "Royal penguins have a white face and chin. The yellow plumes on their heads meet on the forehead. They are similar to Macaroni penguins.",
        location: "Sub-Antartcic islands",
        status: "Near Threatened"
    }

    const YellowEyed = {
        title: "Yellow Eyed Penguin",
        img_src: "images/yellow_eyed.jpg",
        photo_by : "Bernard Spragg",
        photo_by_link: "https://www.flickr.com/photos/volvob12b/",
        orig_photo_link: "https://www.flickr.com/photos/volvob12b/15238441601/",
        info: "The yellow eyed penguin has a pale yellow head and paler yellow eye. The chin and throat are brownish-black. There is a band of bright yellow running from its eyes around the back of the head.",
        location: "New Zealand.",
        status: "Near Threatened"
    }
}

