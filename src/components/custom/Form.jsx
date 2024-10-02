import { useEffect, useRef, useState } from "react";
const Form = ({
  children,
  id,
  onSubmit,
  actionState,
  actions,
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
          {actions?.includes("submit") && <button>submit</button>}
          {actions?.includes("close") && <button>close</button>}
          {actions?.includes("clear") && <button>clear</button>}
          {actions?.includes("back") && <button>back</button>}
        </div>
      )}
    </form>
  );
};

export default Form;
