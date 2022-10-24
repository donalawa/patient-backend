
/**
   * This is used to innitialize firebase and firebase admin {@link link
    name}
    * @author Author/Donacien
    * @date Friday oct 21 2022
    * Contributors : contributor name,
 **/

    import  admin from 'firebase-admin';

    var serviceAccount:any = {
      "type": "service_account",
      "project_id": "patient-system-22976",
      "private_key_id": "f28cf714d1ec4c3661e466256aa440d6ef37f66d",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDYxEUImbmcSJ2U\nXrqgeO27p9HZ1lkH7FwN8nyp8HabNPozGzSDtvE/YsU9F+soHuexGz5p+IodGl21\nYP+4hK1pmbR6L4HSXxM79h1VBAOxJ2MbnwEH0pzpgNaUIbNnZBvT5Qn8sdeTHEex\nknwFJVNlj7H51145rm8SwtNiBMA/SekFsC3gfoSq4wrcfqGDcc2HZ3skl+J7yZY5\n6SK6e0Taoa3sM47AOYKlFYLPUQCCbII83nkmR+ncE9hgVBKT03+7V+Zt91XM3/ir\n31h3Ca/RjyPSY/hni6/1Eh89mCneNETBOQYywF+aNvPtFMzYq0f7VxezEYek/nrv\nutnCZvDPAgMBAAECggEADG5FxszJNzxDOSQTj/dPXtCsn2rqfe9UIIKhToq/kOTO\nKL2GWru6t8rwvhepWldakkgAx/zDFhDFT4z8xtA1zgjMyXYzyJe/yrnK8qCnzr8Q\nMNNpMJ5aqQz356FlIE7X37EFsrJgk/GhVOThhgpr1WoS2t260nqXD3YRWQO/u84X\n3ngvxxaCkz3jBSwnAvlz57kBMC5n2AEStuY4aNgDYDK0mQTvjtQKtllLB6Qby7E2\ncDBRwg/dFIlGwoWVkgIp/qSAzVlYgLXhFGkeoTyIyeWFrxdjBNReiL1sl2WLKYik\nJoZnACzyddJy2Yd/c2fTrxRXEAdOn7gQQpXNaDkHcQKBgQD9mZtmT1SeHiBSvWKY\nq9s84VAP4WXpMN0Zm50csvldQOswIlGYexzHxF4f0cGXgf+P61pdWsN3V+/jFd1J\n8gk0sjPKeAtSfGXnvw/mfbqczy/HquAPETCSksSZVllzOf+0pDOrY7oDVQbpX/Uj\nc/8ylKC1qgIzz6N65H8VCFzkMQKBgQDa0W1R+TYoOwDyGQWVqcMe/EciKVT/Tn+r\nnQcTdtdhyvSC3I7Jhu7BfFVlh2PeM6spWyFNovynyGcBQks83Y9AAd3NwpDrA3rW\nJEbzqagWHrw3hwsDCU3T7VuDDfymj5DjaGT14ES+zw96F7IHzvf1aCCrC02N+bI3\nmksFJ+Tk/wKBgQD0IJgBUGMD57p0DA5LLD1cCQZakz/Y0Qo3KZ+ATiZRiDof1xm3\ncOSOxlFZzkHPyPwtHoKaFdLPI18xuw2QrqgAC4Bh61fy6v/qrPnwh55KcATt8GfK\n+WBJ6XHKrt5jVzT6P4vh9JnPtV128cH5hCPqHDvtRaDjIYKdvjM8GxXZMQKBgQDV\n05VKZ4depNn1ujHU4IGFw+0XGuCuY90qrFX/1T//lj59ql313N9vP7qLblRPDJqT\n3TOcFEtlAdZ2SnwPTErxt2Ex8pF+tnXQ0L5s2Tsh8oLmmBZQr0TYdbfZR0++y8hA\nEQGnq7JB60EqhAE61CtGKqzRuEffF0PqReJNdYCdrQKBgH3KO3/GwnM8NTdQ0a/B\nj8tWnFxF2NaYajELKVq0NiUdjYLWFJhGlNNqfqiXgEVFzZ9HQEAt7KeCW7Mn/90C\nXBqd5+J1AJ3kyQ9hn56wTxMmF5mBKyhhDWhHQXkh+K6mBMnkNerX/9fSP9VLJVBD\nt9ELBQQEQnqgCnClg+zjMvS7\n-----END PRIVATE KEY-----\n",
      "client_email": "firebase-adminsdk-xi870@patient-system-22976.iam.gserviceaccount.com",
      "client_id": "110069699044904638603",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://oauth2.googleapis.com/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-xi870%40patient-system-22976.iam.gserviceaccount.com"
    };

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });

   
    export default  admin