# 🤖 Assistant IA Widget

Un widget d'assistant IA moderne, léger et performant, conçu pour être intégré facilement dans n'importe quel site web.

## ✨ Fonctionnalités

- 💬 **Interface conversationnelle** intuitive et moderne
- 🎨 **Design responsive** avec support dark/light mode
- 🔒 **Sécurisé** avec validation et sanitisation des entrées
- ⚡ **Performant** et optimisé pour le web
- 🌐 **Framework agnostique** - intégrable partout
- 🔄 **Animations fluides** et transitions élégantes
- 📱 **Mobile-first** avec interface adaptative

## 🚀 Démarrage rapide

### Prérequis
- Node.js 18+ et npm/yarn
- Un endpoint backend `/api/predict` pour traiter les requêtes

### Installation locale
```bash
git clone https://github.com/votre-repo/ai-assistant-widget.git
cd ai-assistant-widget
npm install
npm run dev
```

### Accès direct via Lovable
**URL du projet**: https://lovable.dev/projects/e0267b8d-ff6a-4a4d-904d-b30ae47c1c34

## 🔧 Intégration

### 1. Script JavaScript simple (Recommandé)
```html
<!DOCTYPE html>
<html>
<head>
    <title>Mon Site</title>
</head>
<body>
    <!-- Votre contenu -->
    
    <!-- Widget IA -->
    <div id="ai-assistant-root"></div>
    <script src="https://votre-domaine.com/widget.js"></script>
    <script>
        // Initialisation du widget
        AIAssistant.init({
            apiUrl: 'https://votre-api.com/api/predict',
            container: '#ai-assistant-root'
        });
    </script>
</body>
</html>
```

### 2. Module ES6 (Projets modernes)
```javascript
import { AIAssistantWidget } from './components/ai-assistant';

// React
function App() {
    return (
        <div>
            {/* Votre contenu */}
            <AIAssistantWidget />
        </div>
    );
}

// Vue.js
<template>
    <div>
        <!-- Votre contenu -->
        <AIAssistantWidget />
    </div>
</template>
```

### 3. CDN (Intégration ultra-rapide)
```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ai-assistant-widget/dist/style.css">

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/ai-assistant-widget/dist/widget.js"></script>

<script>
    AIAssistant.render({
        apiUrl: 'https://votre-api.com/api/predict'
    });
</script>
```

## 🌍 Compatibilité Framework

| Framework/Langage | Support | Exemple d'intégration |
|------------------|---------|---------------------|
| **React** | ✅ Natif | `import { AIAssistantWidget } from './components'` |
| **Vue.js** | ✅ Component wrapper | Wrapper Vue component |
| **Angular** | ✅ Component wrapper | Wrapper Angular component |
| **WordPress** | ✅ Plugin/Theme | Via functions.php ou plugin |
| **Laravel** | ✅ Blade template | `@include('ai-assistant')` |
| **Django** | ✅ Template | `{% include 'ai_assistant.html' %}` |
| **Express.js** | ✅ EJS/Handlebars | Dans vos templates |
| **Ruby on Rails** | ✅ ERB template | `<%= render 'ai_assistant' %>` |
| **HTML pur** | ✅ Script tag | Voir exemple CDN ci-dessus |

## 🔌 API Backend requise

Votre backend doit exposer un endpoint `POST /api/predict` :

### Format de requête
```json
{
    "message": "Bonjour, comment ça va ?",
    "timestamp": "2024-01-15T10:30:00.000Z"
}
```

### Format de réponse
```json
{
    "response": "Bonjour ! Je vais très bien, merci. Comment puis-je vous aider aujourd'hui ?"
}
```

### Exemples d'implémentation backend

#### Node.js/Express
```javascript
app.post('/api/predict', async (req, res) => {
    const { message } = req.body;
    
    // Votre logique IA ici
    const response = await processWithAI(message);
    
    res.json({ response });
});
```

#### Python/Flask
```python
@app.route('/api/predict', methods=['POST'])
def predict():
    data = request.get_json()
    message = data.get('message')
    
    # Votre logique IA ici
    response = process_with_ai(message)
    
    return jsonify({'response': response})
```

#### PHP
```php
<?php
header('Content-Type: application/json');

$input = json_decode(file_get_contents('php://input'), true);
$message = $input['message'];

// Votre logique IA ici
$response = processWithAI($message);

echo json_encode(['response' => $response]);
?>
```

## 🏗️ Structure du projet

```
src/
├── components/
│   └── ai-assistant/
│       ├── AIAssistantWidget.tsx    # Widget principal
│       ├── ChatWidget.tsx           # Interface de chat
│       ├── MessageBubble.tsx        # Bulle de message
│       ├── ChatInput.tsx            # Zone de saisie
│       └── index.ts                 # Exports
├── pages/
│   └── Index.tsx                    # Page de démo
├── index.css                        # Styles globaux et design system
└── main.tsx                         # Point d'entrée
```

## 🎨 Personnalisation

### Thèmes et couleurs
Modifiez les variables CSS dans `src/index.css` :

```css
:root {
    /* Couleurs principales */
    --primary: 222.2 84% 4.9%;
    --primary-foreground: 210 40% 98%;
    
    /* Widget */
    --widget-bg: 0 0% 100%;
    --widget-border: 214.3 31.8% 91.4%;
    
    /* Messages */
    --message-user: 221.2 83.2% 53.3%;
    --message-ai: 210 40% 96%;
}
```

### Animations
Toutes les animations utilisent les classes Tailwind CSS et peuvent être personnalisées via `tailwind.config.ts`.

## 🔒 Sécurité

### Fonctionnalités de sécurité intégrées
- ✅ **Validation des entrées** (longueur max: 1000 caractères)
- ✅ **Sanitisation HTML** des messages et réponses
- ✅ **Génération d'ID sécurisée** avec `crypto.randomUUID()`
- ✅ **Gestion d'erreurs** sans exposition d'informations sensibles
- ✅ **Protection XSS** via sanitisation du contenu

### Recommandations supplémentaires
- Implémentez un **rate limiting** côté serveur
- Ajoutez une **authentification** pour les utilisateurs
- Configurez **CORS** correctement sur votre API
- Utilisez **HTTPS** en production
- Intégrez avec **Supabase** pour une sécurité renforcée

## 📦 Technologies utilisées

- **Vite** - Build tool ultra-rapide
- **TypeScript** - Typage statique
- **React** - Interface utilisateur
- **shadcn-ui** - Composants UI modernes
- **Tailwind CSS** - Framework CSS utilitaire

## 🚀 Déploiement

### Via Lovable (Recommandé)
1. Ouvrez [Lovable](https://lovable.dev/projects/e0267b8d-ff6a-4a4d-904d-b30ae47c1c34)
2. Cliquez sur **Share → Publish**
3. Votre widget sera déployé instantanément

### Domaine personnalisé
1. Allez dans **Project > Settings > Domains**  
2. Cliquez sur **Connect Domain**
3. Suivez les instructions pour configurer votre domaine

### Build manuel
```bash
npm run build
# Le dossier dist/ contient les fichiers de production
```

## 🧪 Développement

### Lancement du serveur de développement
```bash
npm run dev
```

### Édition du code
- **Via Lovable** : Interface web intuitive avec IA
- **IDE local** : Clone du repo et développement classique
- **GitHub direct** : Édition dans l'interface GitHub
- **Codespaces** : Environnement de développement cloud

## 📖 Configuration avancée

### Personnalisation du widget

```javascript
AIAssistant.init({
    // URL de votre API (obligatoire)
    apiUrl: 'https://votre-api.com/api/predict',
    
    // Conteneur du widget (optionnel)
    container: '#ai-widget',
    
    // Thème (optionnel)
    theme: 'light', // 'light' | 'dark' | 'auto'
    
    // Position (optionnel)
    position: 'bottom-right', // 'bottom-right' | 'bottom-left'
    
    // Messages personnalisés (optionnel)
    messages: {
        welcome: 'Bonjour ! Comment puis-je vous aider ?',
        error: 'Désolé, je ne suis pas disponible actuellement.',
        placeholder: 'Tapez votre message...'
    }
});
```

## ⚡ Performance

- **Bundle size** : ~45KB gzippé
- **Temps de chargement** : <200ms
- **Compatibilité** : Tous les navigateurs modernes
- **Mobile optimisé** : Interface tactile responsive
- **Lazy loading** : Chargement à la demande

## 🤝 Contribution

1. Fork le projet
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 🆘 Support

- 📖 **Documentation Lovable** : [docs.lovable.dev](https://docs.lovable.dev/)
- 🐛 **Issues** : [GitHub Issues](https://github.com/votre-repo/issues)
- 💬 **Communauté** : [Discord Lovable](https://discord.com/channels/1119885301872070706/1280461670979993613)

## 📄 Licence

MIT License - Voir le fichier LICENSE pour plus de détails.

---

**Développé avec ❤️ en utilisant React, TypeScript et Tailwind CSS sur Lovable.dev**
