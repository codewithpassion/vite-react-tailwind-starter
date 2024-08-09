




export const Component = function Start(props: DashboardProps): JSX.Element {
  const { className, ...other } = props;

  return (
    <>
      <div className={`${className ?? ''} w-full flex flex-col md:flex-row container relative mx-auto`} {...other}>
        Welcome
      </div >
    </>
  );
}

export type DashboardProps = React.HTMLAttributes<HTMLDivElement>;