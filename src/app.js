import AceEditor from "ace-editor";
import {} from "brace/theme/chrome";
import {} from "brace/mode/javascript"
export class App {

  myeditor;
  aceEditor;

  attached() {
    //console.log("Ace-Editor.attached() myeditor:",this.myeditor);
    console.log("Ace-Editor.attached() aceEditor:",this.aceEditor);
    this.myeditor = this.aceEditor.au.ace.viewModel.editor;
    console.log("Ace-Editor.attached() myeditor:",this.myeditor);
    this.myeditor.setTheme('ace/theme/chrome');
    this.myeditor.session.setMode('ace/mode/javascript');
  }

  bind(){
    console.log("Ace-Editor.bind() property:",this.myeditor);
  }
  constructor() {
    //this.myeditor=null;
    console.log("Ace-Editor() property:",this.myeditor);
  }
}
