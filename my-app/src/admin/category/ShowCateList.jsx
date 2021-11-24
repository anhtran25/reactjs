const ShowCateList = ({ category }) => {
    return(
        category && category.map(categories => 
            <option key={categories.id} value={categories.id}>{categories.cate_name}</option>
        )
    )
}
export default ShowCateList;