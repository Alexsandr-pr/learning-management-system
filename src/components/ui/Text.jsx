

const Text = ({text, styles}) => {
    return (
        <p className={`text-sm md:text-base text-grey-700 leading-relaxed ${ styles}`}>
            {text}
        </p>
    )
}

export default Text