import { useEffect } from "react";

const GoogleAutocomplet = () => {

    useEffect(() => {
        const script = document.createElement('script')
        script.src = "https://maps.googleapis.com/maps/api/js?libraries=places&key=YOUR_API_KEY"
        document.body.appendChild(script)
    }, [])

    return ( 
        <div>

        </div>
     );
}
 
export default GoogleAutocomplet;