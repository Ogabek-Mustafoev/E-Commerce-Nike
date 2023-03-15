export default function SocialLink({ icon }) {
  return (
    <img src={icon} alt="icons"
      className="w-8 h-8 flex items-start cursor-pointer md:w-6 md:h-6 sm:w-5 sm:h-5 transition-all duration-200 hover:scale-110"
    />
  )
}
