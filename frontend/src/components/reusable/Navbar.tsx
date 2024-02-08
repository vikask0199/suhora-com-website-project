
interface NavbarProps {
    toggleTheme: () => void;
    currentTheme: 'theme-dark' | 'theme-white';
}


const Navbar = (props: NavbarProps) => {
    return (
        <div>
            <div className="flex justify-between items-center root-container">
                <h1 className=" text-lg font-bold">Website</h1>
                <div className="flex items-center space-x-4">
                    <span className="">Dark</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam sequi quia dolorum fugit! Voluptatum officiis quos aperiam labore numquam, cumque saepe blanditiis quo assumenda ipsam earum, error ipsum laborum! Ducimus facilis hic quae ea, quaerat provident aliquid nobis quis sit mollitia illo? Ea quae mollitia quod corporis animi atque aperiam unde aliquid minus tenetur iure reprehenderit commodi, perferendis dolore recusandae. Cupiditate voluptatem sit quasi aperiam eos dignissimos aspernatur odio ab fugit dolore. Repudiandae aliquam vel dolores natus. Perferendis exercitationem tempore vero unde eos architecto esse hic a, laudantium culpa, quam voluptate nihil, iusto optio! Animi modi eos sunt porro aliquam.
                    </p>
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={props.currentTheme === 'theme-white'}
                            onChange={props.toggleTheme}
                        />
                        <span className="slider round"></span>
                    </label>
                    <span className="">White</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar