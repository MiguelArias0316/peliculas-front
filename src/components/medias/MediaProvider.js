import { useEffect, useState } from 'react'
import { consultarGeneros } from '../../services/GeneroService';
import { consultarProductoras } from '../../services/ProductoraService';
import { consultarTiposMultimedia } from '../../services/TipoMultimediaService';
import { consultarDirectores } from '../../services/DirectorService';
import { consultarMedia, crearMedia, editarMediaPorId } from '../../services/MediaService';

export default function MediaProvider({children}) {
    const [generos, setGeneros] = useState([]);
    const [generosActivos, setGenerosActivos] = useState([]);
    const [directores, setDirectores] = useState([]);
    const [directoresActivos, setDirectoresActivos] = useState([]);
    const [productoras, setProductoras] = useState([]);
    const [productorasActivos, setProductorasActivos] = useState([]);
    const [tiposMultimedia, setTiposMultimedia] = useState([]);
    const [medias, setMedias] = useState([])
    const [mediasActivos, setMediasActivos] = useState([])
    const [media, setMedia] = useState({
      nombre: '',
      descripcion: '',
      serial:'',
      titulo:'',
      sinopsis:'',
      url:'',
      imagen:'',
      fecha_estreno:'',
      genero:'',
      director:'',
      productora:'',
      tipoMultimedia:'',
    })
    useEffect(() => {
      listarMedias();
      listarGeneros();
      listarDirectores();
      listarProductoras();
      listarTiposMultimedia();
    }, [])
  
    const listarGeneros = async () => {
      try {
        const { data } = await consultarGeneros()
        const generosActivos = data.filter(genero => genero.estado === true);
        setGenerosActivos(generosActivos);
        setGeneros(data)
      } catch (e) {
        console.log(e)
      }
  
    }
    const listarProductoras = async () => {
      try {
        const { data } = await consultarProductoras()
        const productorasActivos = data.filter(productora => productora.estado === true);
        setProductorasActivos(productorasActivos);
        setProductoras(data)
      } catch (e) {
        console.log(e)
      }
    }
    const listarTiposMultimedia = async () => {
      try {
        const { data } = await consultarTiposMultimedia()
        setTiposMultimedia(data)
      } catch (e) {
        console.log(e)
      }
    
    }
    const listarDirectores = async () => {
      try {
        const {data} = await consultarDirectores()
        const directoresActivos = data.filter(director => director.estado === true);
        setDirectoresActivos(directoresActivos);
        setDirectores(data)
      } catch (e) {
        console.log(e)
      }
    }
  
    const listarMedias = async () => {
      try {
        const {data} = await consultarMedia()
        const mediasActivos = data.filter(media => media.estado === true);
        setMediasActivos(mediasActivos);
        setMedias(data)
      } catch (e) {
        console.log(e)
      }
  
    }
    const guardarMedia = async () => {
      try {
        if(media._id){
          await editarMediaPorId(media, media._id)
        }else{
          await crearMedia(media)
  
        }
        listarMedias()
        clearMedia()
      } catch (e) {
        console.log(e)
      }
  
    }
    const handleChange = (e) => {
      setMedia({
        ...media,
        [e.target.name]: e.target.value
      })
    }
  
    const clearMedia = () => {
      setMedia({
        ...media,
        estado:'',
        nombre: '',
        descripcion: '',
        serial:'',
        titulo:'',
        sinopsis:'',
        url:'',
        imagen:'',
        fecha_estreno:'',
        genero:'',
        director:'',
        productora:'',
        tipoMultimedia:'',
      })
    }
    const obtenerNombreGenero = (id) => {
      const genero = generos.find((g) => g._id === id);
      return genero ? genero.nombre : 'Desconocido';
    };
  
    const obtenerNombreDirector = (id) => {
      const director = directores.find((d) => d._id === id);
      return director ? director.nombre : 'Desconocido';
    };
  
    const obtenerNombreProductora = (id) => {
      const productora = productoras.find((p) => p._id === id);
      return productora ? productora.nombre : 'Desconocido';
    };
  
    const obtenerNombreTipoMultimedia = (id) => {
      const tipo = tiposMultimedia.find((t) => t._id === id);
      return tipo ? tipo.nombre : 'Desconocido';
    };
  
    const seleccionarMediaParaEditar = (media) => {
      setMedia(media);
    };
    
    return children({
        media,
        medias,
        productorasActivos: productorasActivos || [],
        directoresActivos: directoresActivos || [],
        generosActivos: generosActivos || [],
        mediasActivos: mediasActivos || [],
        tiposMultimedia,
        obtenerNombreGenero,
        obtenerNombreDirector,
        obtenerNombreProductora,
        obtenerNombreTipoMultimedia,
        guardarMedia,
        seleccionarMediaParaEditar,
        handleChange
      });
}
