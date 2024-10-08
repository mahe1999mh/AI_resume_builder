import { useEffect, useRef, useState } from "react";
import Button, { SubmitButton } from "./Button";
const Form = ({
  children,
  id,
  onSubmit,
  actionState,
  actions,
  isDiscard,
  onFormReset,
  ...rest
}) => {
  const [checkError, setCheckError] = useState(false);
  const formRef = useRef(null);
  useEffect(() => {
    if (actionState?.isSuccess && onFormReset) {
      setTimeout(() => {
        onFormReset();
        actionState?.reset();
      }, 3000);
    }
  }, [actionState?.isSuccess]);
  return (
    <form
      id={id}
      ref={formRef}
      onSubmit={(e) => {
        e.preventDefault();
        setCheckError(true);
        if (formRef.current && onSubmit) {
          const errorField = formRef.current.querySelector(".form_error");
          if (!errorField) {
            onSubmit(e);
            setCheckError(false);
          }
        }
      }}
      {...rest}
    >
      {children(checkError)}
      {actionState?.error && alert(actionState?.error)}
      {actions?.length > 0 && (
        <div style={{ display: "flex", gap: 10 }}>
          {actions?.includes("submit") && (
            <SubmitButton
              loading={actionState?.isLoading}
              success={actionState?.isSuccess}
            >
              Save
            </SubmitButton>
          )}
          {actions?.includes("close") && (
            <Button loading={actionState?.isLoading}>Close</Button>
          )}
          {actions?.includes("clear") && (
            <Button loading={actionState?.isLoading}>Clear</Button>
          )}
          {actions?.includes("back") && (
            <Button loading={actionState?.isLoading}>Back</Button>
          )}
        </div>
      )}
    </form>
  );
};

export default Form;
