import styles from './styles.module.scss'

export type DividerProps = {
  backgroundColor: string
  dividerColor: string
  height: string
}

const Divider = ({ backgroundColor, dividerColor, height }: DividerProps) => (
  <section
    className={styles['section-divider']}
    style={{ backgroundColor, height }}
    data-testid="section-divider"
  >
    <svg
      className="small-hide"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1628 127"
    >
      <path
        d="M69.363 68.824C46.335 71.18 23.537 71.765.754 66.709V126.5H1627.55V2.07c-57.47-3.45-118.14-.044-175.43 5.053-41.89 3.727-86.63 5.93-125.91 19.936-36.64 13.067-76.63 14.124-114.43 22.628-5.04 1.135-10.1 1.433-15.24 2.202-7.98 1.193-19.28.633-26.3.758-80.48 1.44-161.58 4.362-242.101 1.608-51.931-1.776-103.98-6.242-155.859-9.356-71.939-4.318-144.275 4.745-216.427 1.034-42.933-2.209-85.39 4.639-127.918 5.901-47.511 1.41-94.464 5.954-142.03 7.837-31.245 1.237-63.707-2.861-94.724-.343a1477.983 1477.983 0 0 0-54.323 5.422c-22.442 2.658-45.029 1.774-67.495 4.074Z"
        fill={dividerColor}
        data-testid="svg-path-divider"
      />
    </svg>
    <svg
      className="medium-hide"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 390 111"
    >
      <mask
        id="a"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="390"
        height="111"
      >
        <path fill={dividerColor} d="M0 0h390v111H0z" />
      </mask>
      <g mask="url(#a)">
        <path
          d="M-356.959 56.457c-17.354 1.776-34.535 2.216-51.704-1.594L-412.998 1251h1218.63L817.282 6.151c-43.307-2.6-89.026-.033-132.2 3.808-31.571 2.81-65.288 4.47-94.887 15.024-27.616 9.848-57.747 10.643-86.235 17.052-3.802.856-7.61 1.08-11.487 1.66-6.01.898-14.528.477-19.82.571-60.647 1.085-121.761 3.287-182.443 1.212-39.136-1.339-78.359-4.704-117.455-7.05-54.213-3.255-108.725 3.575-163.098.778-32.354-1.664-64.35 3.496-96.399 4.447-35.803 1.064-71.187 4.487-107.032 5.907-23.546.932-48.01-2.157-71.384-.26a1114.325 1114.325 0 0 0-40.938 4.086c-16.911 2.004-33.933 1.337-50.863 3.07Z"
          fill={dividerColor}
        />
      </g>
    </svg>
  </section>
)

export default Divider
