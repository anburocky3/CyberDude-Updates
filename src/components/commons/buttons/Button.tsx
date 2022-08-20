type Button = {
    variant?: string
    label: string
}

const Button = ({ variant, label }: Button) => {
    const generic = "px-4 py-2 rounded  font-medium"
    const primary = generic + " shadow bg-primary text-white hover:bg-orange-600"
    const secondary = generic + " bg-white text-black border hover:bg-gray-50"

    let theme = '';
    switch (variant) {
        case 'primary':
            theme = primary
            break;
        case 'secondary':
            theme = secondary
            break;
        default:
            theme = primary
    }

    return (<button className={theme}>{label}</button>);
}

export default Button