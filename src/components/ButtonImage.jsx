
import getRandomImages from '../utils/getRandomImages'

const ButtonImage = ({ setImg }) => {

    const changeImage = () => {

        setImg(getRandomImages([1, 2, 3, 4, 5, 6, 7, 8]))
    }

    return (
    <button className='buttonSubmit' onClick={changeImage}>Search</button>
    )
}
export default ButtonImage