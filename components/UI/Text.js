import clsx from 'clsx';

export default function Text({ children, className, ...props }) {
  return (
    <div className={clsx('prose dark:prose-invert ', className)} {...props}>
      {children}
    </div>
  );
}
