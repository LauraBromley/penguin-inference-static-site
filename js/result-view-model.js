/* ViewModel containing the results */

var Prediction = function(data) {
    this.category = ko.observable(data.category);
    this.displayCategory = ko.observable(data.display_category);
    this.percentage = ko.observable(data.percentage);
}
  
var CategoryInfo = function(data) {
    this.title = ko.observable(data.title);
    this.imageSrc = ko.observable(data.img_src);
    this.photoBy = ko.observable(data.photo_by);
    this.photoByLink = ko.observable(data.photo_by_link);
    this.origPhotoLink = ko.observable(data.orig_photo_link);
    this.appearance = ko.observable(data.info);
    this.location = ko.observable(data.location);
    this.status = ko.observable(data.status);

    this.update = function(data){
      this.title(data.title);
      this.imageSrc(data.img_src);
      this.photoBy(data.photo_by);
      this.photoByLink(data.photo_by_link);
      this.origPhotoLink(data.orig_photo_link);
      this.appearance(data.info);
      this.location(data.location);
      this.status(data.status);
    }
}


var ResultModel = function(data, imageWidth, imageHeight, imageSrc) {
  
    resultModel = this;

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
            return 'alert-success';
          } else if (percentage < 30){
            return 'alert-danger';
          } else {
            return 'alert-warning';
          }
    }

    var getImageHtml = function(data, imageWidth, imageHeight, imageSrc){
      transform = '';
      widthAndHeight = 'width='+ imageWidth + ' height=' + imageHeight;
      if (data.rotate === 90) {
        widthAndHeight = getWidthAndHeight(imageWidth, imageHeight);
        transform = 'style="transform: rotate(-90deg); transform-origin: center bottom;"';
      } else if (data.rotate === 270) {
        widthAndHeight = getWidthAndHeight(imageWidth, imageHeight);
        transform = 'style="transform: rotate(-270deg); transform-origin: center bottom;"';
      } else if (data.rotate === 180) {
        transform = 'style="transform: rotate(-180deg); transform-origin: center bottom;"';
      } else {
        transform = '';
      }

      return '<img src="' + imageSrc + '" ' + transform + ' ' + widthAndHeight + '>';
    }

    var getWidthAndHeight = function(x, y) {
      if (x > y && x > 300) {
        x1 = 300;
        y1 = Math.round((x1/x)*y)
        return 'width='+ x1 + ' height=' + y1
      } else {
        return 'width='+ x + ' height=' + y;
      }
    }
  
    resultModel.prediction = getPrediction(data.prediction);
    resultModel.info = ko.observable(data.info);
    
    const showOthers = data.other_predictions.length > 0;
    resultModel.showOther = ko.observable(showOthers);
    resultModel.otherPredictions = ko.observableArray(data.other_predictions);
    if (showOthers) {
      resultModel.otherPredictions.unshift(data.prediction);
    }
    resultModel.categoryItem = getCategoryItem(data.prediction.category);
    resultModel.progressBarHtml = ko.observable(getProgressBarHtml(data.prediction.percentage));
    resultModel.boxClass = ko.observable(getBoxClass(data.prediction.percentage));
    resultModel.imageHtml = ko.observable(getImageHtml(data, imageWidth, imageHeight, imageSrc));

    this.viewCategory = function(otherPred) {
      const penguinInfo = penguinData.getPenguin(otherPred.category);
      resultModel.categoryItem.update(penguinInfo);
   }
    
  }