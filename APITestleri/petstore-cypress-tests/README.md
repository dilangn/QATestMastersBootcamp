# Petstore API Cypress Test Otomasyonu

Bu proje, **Swagger Petstore API** uç noktalarını Cypress kullanarak otomatik olarak test etmek için geliştirilmiştir. Testler, kullanıcı, mağaza (store) ve evcil hayvan (pet) işlemlerini kapsamaktadır.

## 🚀 Projenin Kurulumu

### 1. Projeyi Klonlayın
```bash
git clone https://github.com/kullaniciadi/petstore-cypress-tests.git
cd petstore-cypress-tests
```

### 2. Gerekli Bağımlılıkları Yükleyin
```bash
npm install
```

### 3. Cypress'i Başlatın
```bash
npx cypress open
```

## 📂 Proje Yapısı

```
petstore-cypress-tests/
├── cypress/
│   ├── e2e/
│   │   ├── pet/
│   │   │   ├── create_pet.cy.js
│   │   │   ├── get_pet.cy.js
│   │   │   ├── update_pet.cy.js
│   │   │   └── delete_pet.cy.js
│   │   ├── store/
│   │   │   ├── order.cy.js
│   │   │   └── inventory.cy.js
│   │   └── user/
│   │       ├── create_user.cy.js
│   │       ├── get_user.cy.js
│   │       ├── update_user.cy.js
│   │       └── delete_user.cy.js
│   └── support/
│       └── commands.js
├── cypress.config.js
├── package.json
└── README.md
```

## 🔧 Kullanılan Teknolojiler

- **Cypress:** Test otomasyonu için.
- **Mochawesome:** Detaylı test raporları oluşturmak için.
- **Node.js & NPM:** Proje yönetimi ve bağımlılık yönetimi için.

## 🧪 Testlerin Çalıştırılması

### 1. Testleri Çalıştırın
```bash
npm run test
```

### 2. Rapor Oluşturun
```bash
npm run test:report
```

### 3. Raporu Görüntüleyin
Oluşturulan rapor: `cypress/reports/report.html`

## 📝 Test Kapsamı

### 📦 **Pet Testleri**
- Yeni evcil hayvan oluşturma
- Mevcut evcil hayvan bilgisi alma
- Evcil hayvan bilgisi güncelleme
- Evcil hayvan silme

### 🏬 **Store Testleri**
- Sipariş oluşturma
- Sipariş silme
- Stok durumu sorgulama

### 👤 **User Testleri**
- Kullanıcı oluşturma (tekil ve toplu)
- Kullanıcı bilgisi alma
- Kullanıcı bilgisi güncelleme
- Kullanıcı silme
- Giriş ve çıkış işlemleri

## 📊 Raporlama

Testler tamamlandığında detaylı raporlar **Mochawesome** ile oluşturulur. Raporlar `cypress/reports/` dizininde yer alır.

## 🤝 Katkıda Bulunma

1. Fork'layın
2. Yeni bir branch oluşturun (`git checkout -b feature/yeni-ozellik`)
3. Değişiklikleri commit edin (`git commit -m 'Yeni özellik eklendi'`)
4. Push edin (`git push origin feature/yeni-ozellik`)
5. Pull request gönderin

## 📬 İletişim
Herhangi bir sorunuz olursa bana ulaşabilirsiniz. 😊

---

**Bu proje eğitim amaçlıdır.**

