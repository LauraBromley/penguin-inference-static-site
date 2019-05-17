var AppModel = function() {
    self = this;

    // holds the results 
    self.result = ko.observable();

    // hold the source for the test image
    self.testImageSrc = ko.observable('');

    // show/hide variables
    self.showUploadForm = ko.observable();
    self.showUploadStep1 = ko.observable();
    self.showUploadStep2 = ko.observable();
    self.showResults = ko.observable();
    self.showError = ko.observable();

    self.init = function() {
        initShowHide()
    }

    self.fileSelected = function() {
        input = $("#image-file")[0];
        readUrl(input);
    }

    self.doProcess = function() {
        submitToServer();
    }

    self.tryAnother = function() {
        self.testImageSrc('');
        self.result = ko.observable();
        initShowHide();
    }
   
    var initShowHide = function() {
        self.showUploadForm(true);
        self.showUploadStep1(true);
        self.showUploadStep2(false);
        self.showResults(false);
        self.showError(false);
    }

    var setImageSrc = function(imageSrc) {
        self.showUploadStep1(false);
        self.showUploadStep2(true);
        self.testImageSrc(imageSrc);
    }

    var readUrl = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                setImageSrc(e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    var uploadFailed = function(error) {
        console.log('The server returned an error', error);
        self.showError(true);
        self.showUploadForm(false);
    }

    var populateResults = function(data) {
        var resultModel = new ResultModel(data);
        self.result(new ResultModel(data));
        self.showUploadForm(false);
        self.showResults(true);
    }

    // mock the server call
    var testSubmitToServer = function() {
        var testData = {
            rotate: 270,
            info: 'Test result',
            prediction: {
                category: 'chinstrap',
                display_category: 'Chinstrap',
                percentage: 60
            },
            other_predictions: [
                {
                    category: 'humboldt',
                    display_category: 'Humboldt',
                    percentage: 30
                },
                {
                    category: 'african',
                    display_category: 'African',
                    percentage: 10
                }
            ]
        }; 
        populateResults(testData);
    }

    var submitToServer = function(){
        var url = "http://127.0.0.1:5000/upload" // server url;
        var data = { "image_base_64": self.testImageSrc() }
        $.ajax({
            url: url,
            type: 'POST',
            crossDomain: true,
            contentType: 'application/json',
            data: JSON.stringify(data),
            dataType: 'json',
            success: function(data) {
                populateResults(data);
            },
            error: function(xhr, ajaxOptions, thrownError) {
                uploadFailed(thrownError);
            }
        });
    }
}

$(document).ready(function() {
    appModel = new AppModel();
    appModel.init();
    ko.applyBindings(appModel);
  });