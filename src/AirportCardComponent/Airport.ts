export interface Airport {
    id: number
    name?: string
    'gps-code'?: string
    municipality?: string
    code: string
    image: string
    long: number
    lat: number
    elevation?: string
    like?: boolean
}