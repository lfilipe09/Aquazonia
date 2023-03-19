export type DotAndLineProps = {
  dataTestId?: string
  className?: string
}

const DotAndLine = ({ dataTestId, className }: DotAndLineProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 231.94 54.39"
    data-testid={dataTestId}
    className={className}
  >
    <g data-name="Layer 2">
      <g data-name="Layer 1">
        <path
          d="M230.44 52.89H68.94c-13.2 0-12-7.86-12-28.57 0-10.35-3-15.43-14.5-15.43h-28"
          style={{
            fill: 'none',
            stroke: '#0a4262',
            strokeLinecap: 'round',
            strokeWidth: '3px'
          }}
        />
        <circle cx="9" cy="9" r="9" style={{ fill: '#0a4262' }} />
      </g>
    </g>
  </svg>
)

export default DotAndLine
