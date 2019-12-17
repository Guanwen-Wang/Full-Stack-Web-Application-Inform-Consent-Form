import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserProject, UserProjectDataService } from '../service/data/user-project.service';

declare var $: any;

@Component({
  selector: 'app-edu-module',
  templateUrl: './edu-module.component.html',
  styleUrls: ['./edu-module.component.css']
})
export class EduModuleComponent implements OnInit {
  unique_id: string = '';
  site_id: string = '';
  speakSpeed: number = 1;
  speakStatus: string = "Not Speaking";
  userProject: UserProject = {id: 0, uid: 0, pid: 0, is_completed: false, is_signed: false, edu_start_time: 0, icf_start_time: 0, teachback_start_time: 0, finish_time: 0};
  curUnixTime: number = 0;

  constructor(private userProjectService: UserProjectDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.unique_id = this.route.snapshot.params['unique_id'];
    this.site_id = this.route.snapshot.params['site_id'];
    this.userProjectService.getUserProjectByUniqueIdAndSiteId(this.unique_id, this.site_id).subscribe(response => {
      console.log(response);
      this.userProject = response;
      // this.userProject.edu_start_time = this.curUnixTime;
    });

    $('#pause-btn').attr('disabled','disabled');
    $('#resume-btn').attr('disabled','disabled');
    $('#cancel-btn').attr('disabled','disabled');

    function loadVoices() {
      // Fetch the available voices in English US.
      let voices = speechSynthesis.getVoices();
      $("#voice-names").empty();
      voices.forEach(function(voice, i) {
        const $option = $("<option>");
        $option.val(voice.name);
        $option.text(voice.name + " (" + voice.lang + ")");
        $option.prop("selected", voice.name === "Google US English");
        $("#voice-names").append($option);
      });
    }

    // Execute loadVoices.
    loadVoices();

    // Chrome loads voices asynchronously.
    window.speechSynthesis.onvoiceschanged = function(e) {
      loadVoices();
    };

    const uttr = new SpeechSynthesisUtterance();

    // Set up an event listener for when the 'speak' button is clicked.
    // Create a new utterance for the specified text and add it to the queue.
    $("#speak-btn").click(function() {
      uttr.text = $("#text").val();
      uttr.rate = parseFloat($("#rate").val());
      // If a voice has been selected, find the voice and set the
      // utterance instance's voice attribute.
      if ($("#voice-names").val()) {
        uttr.voice = speechSynthesis
          .getVoices()
          .filter(voice => voice.name == $("#voice-names").val())[0];
      }
      uttr.onboundary = onboundaryHandler;
      speechSynthesis.speak(uttr);
      uttr.onend = function() {
        console.log("on end!");
      };
      $('#speak-btn').attr('disabled','disabled');
      $('#pause-btn').removeAttr('disabled');
      $('#cancel-btn').removeAttr('disabled');
    });
    $("#pause-btn").click(function() {
      speechSynthesis.pause();
      $('#pause-btn').attr('disabled','disabled');
      $('#resume-btn').removeAttr('disabled');
    });
    $("#resume-btn").click(function() {
      speechSynthesis.resume();
      $('#pause-btn').removeAttr('disabled');
      $('#resume-btn').attr('disabled','disabled');
    });
    $("#cancel-btn").click(function() {
      speechSynthesis.cancel();
      $('#speak-btn').removeAttr('disabled');
      $('#pause-btn').attr('disabled','disabled');
      $('#resume-btn').attr('disabled','disabled');
      $('#cancel-btn').attr('disabled','disabled');
    });

    function onboundaryHandler(event){
      var textarea = (<HTMLInputElement>document.getElementById('text'));
      var value = textarea.value;
      var index = event.charIndex;
      var word = getWordAt(value, index);
      var anchorPosition = getWordStart(value, index);
      var activePosition = anchorPosition + word.length;

      textarea.focus();

      if (textarea.setSelectionRange) {
         textarea.setSelectionRange(anchorPosition, activePosition);
      }
      // else {
      //    var range = textarea.createTextRange();
      //    range.collapse(true);
      //    range.moveEnd('character', activePosition);
      //    range.moveStart('character', anchorPosition);
      //    range.select();
      // }
    };

    // Get the word of a string given the string and index
    function getWordAt(str, pos) {
        // Perform type conversions.
        str = String(str);
        pos = Number(pos) >>> 0;

        // Search for the word's beginning and end.
        var left = str.slice(0, pos + 1).search(/\S+$/),
            right = str.slice(pos).search(/\s/);

        // The last word in the string is a special case.
        if (right < 0) {
            return str.slice(left);
        }

        // Return the word, using the located bounds to extract it from the string.
        return str.slice(left, right + pos);
    }

    // Get the position of the beginning of the word
    function getWordStart(str, pos) {
        str = String(str);
        pos = Number(pos) >>> 0;

        // Search for the word's beginning
        var start = str.slice(0, pos + 1).search(/\S+$/);
        return start;
    }

  }

  speakClicked() {
    this.speakStatus = "Speaking";
  }

  pauseClicked() {
    this.speakStatus = "Paused";
  }

  resumeClicked() {
    this.speakStatus = "Speaking";
  }

  cancelClicked() {
    this.speakStatus = "Cancelled";
  }

  backYourProject() {
    this.router.navigate(['yourProject', this.unique_id, this.site_id]);
  }

  goIcfModulePre() {
    // this.router.navigate(['icfModulePre', this.unique_id, this.site_id]);
    this.curUnixTime = new Date().getTime();
    this.userProject.icf_start_time = this.curUnixTime;
    this.userProjectService.updateUserProject(this.userProject).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['icfModulePre', this.unique_id, this.site_id]);
      }
    )
  }

}
