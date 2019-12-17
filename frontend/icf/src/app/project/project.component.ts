import { Component, OnInit } from '@angular/core';
import { ProjectDataService, Project } from '../service/data/project-data.service';
import { ActivatedRoute, Router } from '@angular/router';

// declare var ChangeItem: any;
declare var $: any;
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  id: number;
  project: Project;
  loaded: boolean = false;

  constructor(private projectService: ProjectDataService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.projectService.getProjectById(this.id).subscribe(response => {
      this.project = response;
      this.loaded = true;
    });
    // ChangeItem();


    // jQuery text2speech method 29 ~ 53
    // var message = new SpeechSynthesisUtterance($("#text").val());
    // var voices = speechSynthesis.getVoices();

    // $("input").on("change", function () {
    //     console.log($(this).attr("id"), $(this).val());
    //     message[$(this).attr("id")] = $(this).val();
    // });

    // $("select").on("change", function () {
    //     message.voice = voices[$(this).val()];
    // });

    // $("button").on("click", function () {
    //     speechSynthesis.speak(message);
    // });

    // // Hack around voices bug
    // var interval = setInterval(function () {
    //     voices = speechSynthesis.getVoices();
    //     if (voices.length) clearInterval(interval); else return;

    //     for (var i = 0; i < voices.length; i++) {
    //         $("select").append("<option value=\"" + i + "\">" + voices[i].name + "</option>");
    //     }
    // }, 10);

    // Fetch the list of voices and populate the voice options.
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
      speechSynthesis.speak(uttr);
      uttr.onend = function() {
        // hoge
      };
    });
    $("#pause-btn").click(function() {
      speechSynthesis.pause();
    });
    $("#resume-btn").click(function() {
      speechSynthesis.resume();
    });
    $("#cancel-btn").click(function() {
      speechSynthesis.cancel();
    });

  }

  ngAfterViewInit() {
    // const script1 = document.createElement('script');
    // script1.async = true;
    // script1.src = '../../js/gTrans.js';
    // script1.type = 'text/javascript';

    // const div = document.getElementById('script1');
    // div.insertAdjacentElement('afterend', script1);

    // const script2 = document.createElement('script');
    // script2.async = true;
    // script2.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    // script2.type = 'text/javascript';

    // const div2 = document.getElementById('script2');
    // div2.insertAdjacentElement('afterend', script2);
}

  backHome() {
    this.router.navigate(['projects']);
  }
}
