import gql from "graphql-tag"

export default gql`
query GetIrradianceDataFor($lat: Float = 33.4090, $lon: Float = -111.8685) {
	irradiance: getIrradianceDataFor(lat: $lat, lon: $lon)
}
`
