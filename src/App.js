import BlurEventComponent from "./BlurEventComponent";
import CopyEventComponent from "./CopyEventComponent";
import CutEventComponent from "./CutEventComponent";
import EventHandlingComponent from "./KeyEvent";
// import Event2 from "./Event2";
import FocusEventComponent from "./FocusEventComponent";
import PasteEvent from "./PasteEvent";
import ResizeEventComponent from "./ResizeEventComponent";
import ScrollEventComponent from "./ScrollEventComponent";
import DragEventComponent from "./DragEventComponent";
import MouseEventComponent from "./MouseEventComponent";
import PointerEventsComponent from "./PointerEventComponent";
import KeyEventsComponent from "./KeyEvent2";


function App() {
  return (
    <div className="App">
      <PasteEvent />
      <FocusEventComponent />
      <BlurEventComponent />
      <KeyEventsComponent />
      <CopyEventComponent />
      <CutEventComponent />
      <DragEventComponent />
      <MouseEventComponent />
      <ResizeEventComponent />
      <ScrollEventComponent />
      <EventHandlingComponent />
      <PointerEventsComponent />
      <onSubmitEventComponent />


    </div>
  );
}

export default App;
