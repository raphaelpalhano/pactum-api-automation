import { request, settings } from 'pactum';


export async function setupRequestPeople() {
    request.setBaseUrl('https://swapi.dev/api/people/');
    request.setDefaultHeaders({
        'Content-Type': 'application/json'
    })
    settings.setReporterAutoRun(false);
    settings.setLogLevel('DEBUG');

}


export async function setupRequest() {
    request.setBaseUrl('https://swapi.dev/api/planets/');
    request.setDefaultHeaders({
        'Content-Type': 'application/json'
    })
    settings.setReporterAutoRun(false);
    settings.setLogLevel('DEBUG');


}