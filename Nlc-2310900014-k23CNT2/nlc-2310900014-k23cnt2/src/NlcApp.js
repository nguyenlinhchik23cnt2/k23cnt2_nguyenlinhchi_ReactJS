import React, { useState } from "react";
import NlcMemberAdd from "./Component/NlcMemberAdd";
import NlcMemberList from "./Component/NlcMemberList";

const NlcApp = () => {
  const [NLCMembers, setNLCMembers] = useState([
    { NLCid: "SV001", NLCFullname: "Nguyễn Văn A", NLCUsername: "nguyenvana", NLCPassword: "123456" },
    { NLCid: "SV002", NLCFullname: "Trần Thị B", NLCUsername: "tranthib", NLCPassword: "abcdef" },
    { NLCid: "SV003", NLCFullname: "Lê Hoàng C", NLCUsername: "lehoangc", NLCPassword: "hoangc789" },
    { NLCid: "SV004", NLCFullname: "Phạm Minh D", NLCUsername: "phamminhd", NLCPassword: "minhd@321" },
    { NLCid: "SV005", NLCFullname: "Đặng Quốc E", NLCUsername: "dangquoce", NLCPassword: "pass1234" },
  ]);

  const [NLCMember, setNLCMember] = useState({ NLCid: "", NLCFullname: "", NLCUsername: "", NLCPassword: "" });
  const [isEdit, setIsEdit] = useState(false);

  // Handle Add Member
  const onNLCHandleAdd = (newMember) => {
    setNLCMembers([...NLCMembers, newMember]);
  };

  // Handle Edit Mode
  const onNLCHandleEditMode = (member) => {
    setNLCMember(member);
    setIsEdit(true);
  };

  // Handle Save Edited Member
  const onNLCHandleEdit = (editedMember) => {
    setNLCMembers(NLCMembers.map((m) => (m.NLCid === editedMember.NLCid ? editedMember : m)));
    setIsEdit(false);
    setNLCMember({ NLCid: "", NLCFullname: "", NLCUsername: "", NLCPassword: "" });
  };

  // Handle Delete Member
  const onNLCHandleDelete = (NLCid) => {
    setNLCMembers(NLCMembers.filter((m) => m.NLCid !== NLCid));
  };

  return (
    <div>
      <h1 className="text-center">Nguyễn Linh Chi - 2310900014 - K23CNT2 - Exam</h1>
      <section className="container-fluid">
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              <NlcMemberAdd 
                isEdit={isEdit} 
                renderNLCMember={NLCMember} 
                onNLCHandleAdd={onNLCHandleAdd} 
                onNLCHandleEdit={onNLCHandleEdit} 
              />
              <NlcMemberList
                renderNLCStudents={NLCMembers} 
                onNLCHandleView={onNLCHandleEditMode} 
                onNLCHandleDelete={onNLCHandleDelete}
                onNLCHandleEditMode={onNLCHandleEditMode}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NlcApp;
