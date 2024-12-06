const Content = ({
    icon: Icon,
    title = "title",
    description = "description...",
    iconColor = "text-blue-600" // Default color
 }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 content mb-5">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                {Icon && <Icon className={iconColor} />} 
                {title}
            </h3>
            <p className="text-gray-600">
                {description}
            </p>
        </div>
    )
 }
 
 export default Content;