var PenguinInfo = function(data) {
    this.title = ko.observable(data.title);
    this.imageSrc = ko.observable(data.img_src);
    this.photoBy = ko.observable(data.photo_by);
    this.photoByLink = ko.observable(data.photo_by_link);
    this.origPhotoLink = ko.observable(data.orig_photo_link);

    this.update = function(data){
      this.title(data.title);
      this.imageSrc(data.img_src);
      this.photoBy(data.photo_by);
      this.photoByLink(data.photo_by_link);
      this.origPhotoLink(data.orig_photo_link);
    }
}

var PenguinSet = function(heading, infoSet) {
    this.heading = heading;
    this.infoSet = ko.observableArray(infoSet);
}

var PenguinSetModel = function() {
    var self = this;
    
    var penguinData = new PenguinData();

    var getCategoryItem = function(category){
        const data = penguinData.getPenguin(category);
        return new PenguinInfo(data); 
      }

     var getPenguinSet = function(penguinSet) {
        return penguinSet.map(function(x) {
            return getCategoryItem(x)
        });
    }

    var antarcticSet = new PenguinSet("Antarctic Penguins", getPenguinSet(penguinData.anPenguins));
    var crestedSet = new PenguinSet("Crested Penguins", getPenguinSet(penguinData.crestPenguins));
    var americanSet = new PenguinSet("American/African Penguins", getPenguinSet(penguinData.amPenguins));
    var ausSet = new PenguinSet("Other non-crested Penguins", getPenguinSet(penguinData.ausPenguins));

    self.penguinSets = [antarcticSet, crestedSet, americanSet, ausSet];
}

$(document).ready(function() {
    appModel = new PenguinSetModel();
    ko.applyBindings(appModel);
});
