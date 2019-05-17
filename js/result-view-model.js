/* ViewModel containing the results */

var Prediction = function(data) {
    this.category = ko.observable(data.category);
    this.displayCategory = ko.observable(data.display_category);
    this.percentage = ko.observable(data.percentage);
}
  
var CategoryInfo = function(data) {
    this.imageSrc = ko.observable(data.img_src);
    this.photoBy = ko.observable(data.photo_by);
    this.photoByLink = ko.observable(data.photo_by_link);
    this.origPhotoLink = ko.observable(data.orig_photo_link);
    this.appearance = ko.observable(data.info);
    this.location = ko.observable(data.location);
    this.status = ko.observable(data.status);
}


var ResultModel = function(data) {

    var penguinData = new PenguinData();
  
    var getPrediction = function(predictionData) {
      return new Prediction(predictionData);
    }
  
    var getCategoryItem = function(category){
      const penguinInfo = penguinData.getPenguin(category);
      return new CategoryInfo(penguinInfo); 
    }
  
    var getProgressBarHtml = function(percentage) {
        var pbClass = "";
        if (percentage > 60){
          pbClass = 'bg-success';
        } else if (percentage < 30){
          pbClass = 'bg-danger';
        } else {
          pbClass = 'bg-warning';
        }
  
        return '<div class="progress-bar ' + pbClass + ' role="progressbar" ' +
               'style="width: ' + percentage + '%" aria-valuenow="' + percentage + '" ' + 
               'aria-valuemin="0" aria-valuemax="100">' + percentage + '%</div>';
    }

    var getBoxClass = function(percentage) {
        if (percentage > 60){
            bClass = 'alert-success';
          } else if (percentage < 30){
            bClass = 'alert-danger';
          } else {
            bClass = 'alert-warning';
          }
    }
  
    this.rotate = ko.observable(data.rotate);
    this.prediction = getPrediction(data.prediction);
    this.info = ko.observable(data.info);
    this.otherPredictions = ko.observableArray(data.other_predictions);
    this.categoryItem = getCategoryItem(data.prediction.category);
    this.progressBarHtml = ko.observable(getProgressBarHtml(data.prediction.percentage));
    this.boxClass = ko.pureComputed(function() {
            getBoxClass(data.prediction.percentage);
        });
  
  }