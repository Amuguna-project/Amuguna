import Button from "components/Button";
import Input from "components/Input";
import ModalTemplate from "components/ModalTemplate";
import useInput from "hooks/useInput";
import useToggle from "hooks/useToggle";
import React from "react";

function Test() {
  const [form, onChangeForm] = useInput("");
  const [isShow, onToggleShow] = useToggle(false);

  return (
    <div>
      <input type="text" value={form} onChange={onChangeForm} />
      <button onClick={onToggleShow}>나 눌러바</button>
      {isShow && (
        <ModalTemplate
          isModal={isShow}
          onToggleModal={onToggleShow}
          width="200px"
          height="100px"
        >
          asdasd
        </ModalTemplate>
      )}

      <Button variant="primary" width="100px" height="50px">
        버튼임
      </Button>
      <Input width="100px" height="50px" />
    </div>
  );
}

export default Test;
