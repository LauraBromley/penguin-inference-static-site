var AppModel = function() {
    self = this;

    // holds the results 
    self.result = ko.observable();

    // hold the source for the test image
    self.testImageSrc = ko.observable('');

    // default for image url
    self.urlPaste = ko.observable('');
    self.validUrl = ko.observable(false);

    // default error
    self.errorMessage = ko.observable('An error occurred.')

    // get the image width/height before rotation
    self.imageWidth = 0;
    self.imageHeight = 0;

    // show/hide variables
    self.showUploadForm = ko.observable();
    self.showUploadStep1 = ko.observable();
    self.showUploadStep2 = ko.observable();
    self.showResults = ko.observable();
    self.showError = ko.observable();

    // image extention
    var imageExtension = "";

    self.init = function() {
        initShowHide();
    }

    self.fileSelected = function() {
        input = $("#image-file")[0];
        readInput(input);
    }

    self.doProcess = function() {
        submitToServer();
    }

    self.tryAnother = function() {
        self.testImageSrc('');
        self.result = ko.observable();
        self.urlPaste = ko.observable('');
        self.validUrl = ko.observable(false);
        initShowHide();
    }

    self.imageLoaded = function() {
        image = $("#uploaded-image")
        self.imageWidth = image.width();
        self.imageHeight = image.height();
    }

    self.urlPasted = function() {
        self.showError(false);
        var isUrlValid = validateUrl(self.urlPaste());
        self.validUrl(true);
        if (isUrlValid){
            setImageSrc(self.urlPaste());
            imageExtension = getExtensionFromUrl(self.urlPaste());
        } else {
            const errMessage = "The image URL seems to be invalid. Please check that it points to an image. " +
                            "You should be able to get an image URL by right clicking on the image in " + 
                            " your browser and selecting 'Copy image address'. Valid image files are jpg, jpeg, png or gif " +
                            "(an example is https://www.patagoniapenguins.org/image/penguin1.png)";
            showErrorMessage(errMessage);
        }

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

    var readInput = function(input) {
        if (input.files && input.files[0]) {
            imageExtension = input.files[0].type;
            var reader = new FileReader();
            reader.onload = function(e) {
                setImageSrc(e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    var uploadFailed = function(error) {
        console.log('The server returned an error', error);
        showErrorMessage("An error occurred during processing. Please try again.");
        self.showUploadForm(false);
    }

    var populateResults = function(data) {
        const resultModel = new ResultModel(data, self.imageWidth, self.imageHeight, self.testImageSrc());
        self.result(resultModel);
        self.showUploadForm(false);
        self.showResults(true);
    }

    var validateUrl = function(imageUrl){
        const regexString = "(?:([^:/?#]+):)?(?://([^/?#]*))?([^?#]*\\.(?:jpg|jpeg|png|gif))(?:\\?([^#]*))?(?:#(.*))?";
        const regex = new RegExp(regexString);
        return regex.test(imageUrl);
    }

    var getExtensionFromUrl = function(imageUrl){
        const lastDot = imageUrl.lastIndexOf('.');
        var ext = imageUrl.substring(lastDot+1);
        if (ext == 'jpg') { ext = 'jpeg'; } 
        ext = 'image/' + ext;
        return ext;
    }

    var showErrorMessage = function(message) {
        self.showError(true);
        self.errorMessage(message);
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
        // server url
        const url = "http://127.0.0.1:5000/upload";
        var data = {};
        
        if (self.validUrl()) {
            data = { 
                "image_type": "URL",
                "image_url": self.urlPaste(),
                "image_ext": imageExtension
            };
        } else {
            data = { 
                "image_type": "BASE64",
                "image_base_64": self.testImageSrc(),
                "image_ext": imageExtension
            };
        }
       
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