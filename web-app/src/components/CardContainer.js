export const CardContainer = ({ children, header, footer }) => {
  return (
    <div className="card">
      {header ? <div className="card-header">{header}</div> : null}
      <div className="card-content">{children}</div>
      {footer ? <div className="card-footer">{footer}</div> : null}
    </div>
  );
};
