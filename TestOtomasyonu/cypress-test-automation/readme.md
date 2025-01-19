# Cypress Projesi

Bu proje, modern web uygulamalarını uçtan uca (E2E) test etmek için Cypress kullanılarak oluşturulmuştur.

## Giriş

Cypress, front-end testlerinde kolay ve hızlı bir deneyim sunar. Testleri hem interaktif (GUI) hem de headless (terminal) modda çalıştırabilir, anlık geri bildirim alabilirsiniz.

## Kurulum

1. Proje klonlama:
```bash
   git clone https://github.com/dilangn/cypress-test-automation.git
   cd cypress-test-automation
```

2. Bağımlılıkların yüklenmesi:
```bash
npm install
```
### veya
```bash
yarn
```

## Kullanım
### Komut Satırından (Headless Mod) Test Çalıştırma
```bash
   npm run test
```

Terminal çıktısı üzerinde tüm test sonuçlarını görebilirsiniz.

```bash
   npm run allure
```

Allure raporunu görebilirsiniz

## Proje Yapısı

```
cypress/
├─ e2e/
├─ base/
│  └─ BaseLibrary.js
├─ pages/
│  ├─ AccountInformationPage.js
│  ├─ LoginPage.js
│  ├─ MainPage.js
│  └─ RegisterPage.js
├─ tests/
│  └─ login.tests.cy.js
├─ support/
│  ├─ commands.js
│  └─ e2e.js
node_modules/
.gitignore
cypress.config.js
package.json
readme.md
```

- cypress/e2e/: Uçtan uca testler veya ek yapılandırmalar için kullanılabilecek klasör.
- cypress/base/BaseLibrary.js: Sık kullanılan fonksiyonlar veya kütüphane fonksiyonlarını tanımlayabileceğiniz dosya.
- cypress/pages/: Page Object Model yaklaşımı ile her sayfa için ayrı dosyalar (LoginPage.js, MainPage.js vb.).
- cypress/tests/login.tests.cy.js: Giriş işlemlerini test eden senaryolar.
- cypress/support/: Özel komutlar (commands.js) ve E2E ayarlarının (e2e.js) bulunduğu klasör.
- cypress.config.js: Cypress konfigürasyon dosyası.
- .gitignore: Git versiyon kontrolüne dahil edilmemesi gereken dosya ve klasörleri tanımladığınız dosya.
- package.json: Projenin bağımlılıklarını ve çalıştırılabilir script’lerini tanımlar.
- readme.md: Bu dokümanı içerir ve proje hakkında genel bilgileri sunar.

## Katkıda Bulunma

1. Bu projeyi forklayın.
2. Yeni bir dal (branch) oluşturun (git checkout -b yeni-ozellik).
3. Değişikliklerinizi ekleyin ve commitleyin (git commit -m "Yeni özellik eklendi").
4. Deponuza pushlayın (git push origin yeni-ozellik).
5. Pull Request (PR) açarak katkılarınızı paylaşın.