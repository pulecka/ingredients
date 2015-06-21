/**
 * Created by janci on 12/10/14.
 */

angular.module('iFile.module', [])
  .directive('iFile', iFile);


  function iFile() {
    return {
      restricts: 'AE',
      scope: {
        model: '=?',
        kind: '@?',
        multifile: '@?',
        name: '@?',
        index: '@?'
      },
      templateUrl: 'app/modules/iFile/iFile.template.html',
      replace: true,
      link: linkF
    };

    function linkFn(s, e, a) {
      var Upload, elemento, processFiles;

      elemento = e[0];

      processFiles = function(files) {
        var _tmp, file, i, len, results, upload;
        s.uploadedSuccessfully = false;
        s.uploadError = false;
        if (s.multifile) {
          _tmp = [];
          results = [];
          for (i = 0, len = files.length; i < len; i++) {
            file = files[i];
            results.push(_tmp.push(new Upload(file)));
          }
          return results;
        } else {
          return upload = new Upload(files[0]);
        }
      };

      Upload = (function() {
        function Upload(source) {

          this.file = source;

          if (!this.checkFile(this.file)) return;

          this.reader = new FileReader();
          this.reader.onload = (function(_this) {
            return function() {
              if (s.multifile) {
                s.model = s.model || [];
                s.model.push(_this.reader.model);
                s.$apply();
              } else {
                s.model = _this.reader.model;
                //_this.upload(_this.reader.model);
                s.$apply();
              }
            };
          })(this);
          this.reader.readAsDataURL(this.file);
        }

        //Upload.prototype.uploadedSuccessfully = function() {
        //  s.uploadedSuccessfully = true;
        //  return s.uploadError = false;
        //};
        //
        //Upload.prototype.uploadError = function() {
        //  s.uploadedSuccessfully = false;
        //  return s.uploadError = true;
        //};

        Upload.prototype.checkFile = function(file) {
          if (file.type.match(/^image\W/) !== null) {
            return true;
          } else {
            alert('Only images are allowed!');
            return false;
          }
        };

        return Upload;

      })();


      // ** event catchers **
      elemento.addEventListener('change', (function(_this) {
        return function(ev) {
          var files;
          files = ev.target.files;
          return processFiles(files);
        };
      })(this));
      elemento.addEventListener('dragover', function(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        return ev.dataTransfer.dropEffect = 'copy';
      });
      elemento.addEventListener('drop', (function(_this) {
        return function(ev) {
          var files;
          ev.stopPropagation();
          ev.preventDefault();
          files = ev.target.files || ev.dataTransfer.files;
          return processFiles(files);
        };
      })(this));
    }

  }
