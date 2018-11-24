export function getGoogleMapAPI(url) {
    let ref = window.document.getElementsByTagName("script")[0]
    let script =window.document.createElement("script")
    script.src = url
    script.asnyc = true
    script.defer = true
    ref.parentNode.insertBefore(script, ref)
}