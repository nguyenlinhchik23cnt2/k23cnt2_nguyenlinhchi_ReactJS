import NLCCompInfor from "./NLCCompInfor";

function App() {
  const personalInfo = {
    fullName: "Nguyễn Linh Chi ",
    studentID: "2310900014 ",
    birthDate: "24/01/2005 ",
    PhoneNumber: "0366xxxxx ",
    className: "K23CNT2"
  };
  return (
    <div>
      <h1>Thông tin cá nhân</h1>
      <NLCCompInfor info={personalInfo} />
    </div>
  );
}
 export default App;