

const TopAreaMenu = (handleIsSlideChange, isSlide) => {

    console.log(handleIsSlideChange.isSlide)

    return (
         <span onClick={() => console.log(isSlide)}>
            메뉴
        </span>
    )

}

export default TopAreaMenu;