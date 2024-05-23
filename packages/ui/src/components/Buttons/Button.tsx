import './button.css'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  primary?: boolean
  backgroundColor?: string
  fontColor?: string
  size?: 'small' | 'medium' | 'large'
  label: string
  shape?: 'rect' | 'rounded' | 'oval'
  shadow?: boolean
  onClick?: () => void
}

const Button = ({
  className,
  primary = false,
  size = 'medium',
  backgroundColor,
  fontColor,
  label,
  shape = 'rounded',
  shadow = false,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'button--primary' : 'button--secondary'
  const isShadow = shadow ? 'button--shadow' : ''

  const isTailwindColor =
    backgroundColor?.startsWith('bg-') ||
    (!backgroundColor?.includes('(') && !backgroundColor?.startsWith('#'))
  const tailwindClass = isTailwindColor ? ` ${backgroundColor}` : ''
  const inlineStyle = isTailwindColor ? {} : { backgroundColor }

  return (
    <button
      type="button"
      className={`${className} ${mode} button button--${size} button--${shape} ${tailwindClass} ${isShadow}`}
      style={inlineStyle}
      {...props}
    >
      <p
        className={`text-${fontColor} text-center text-sm not-italic font-bold leading-[170%] capitalize`}
      >
        {label}
      </p>
    </button>
  )
}

export default Button
