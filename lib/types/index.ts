export type SupportedLanguage = 'en' | 'pcm' | 'ha' | 'ig' | 'yo';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  language: SupportedLanguage;
  createdAt: string;
}

export interface OrchestrationPayload {
  messages: ChatMessage[];
  targetLanguage: SupportedLanguage;
}
