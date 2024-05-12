from telegram.ext import Updater, CommandHandler

# Функція для обробки команди /start
def start(update, context):
    context.bot.send_message(chat_id=update.effective_chat.id, text="Привіт! Я твій бот.")

def main():
    # Встановлення токену вашого бота
    updater = Updater("6599555098:AAHFbnqjPWXJ4yAsRZ10VaT3PAWj1qXOPPA", use_context=True)

    # Додавання обробника для команди /start
    updater.dispatcher.add_handler(CommandHandler('start', start))

    # Запуск бота
    updater.start_polling()
    updater.idle()

if __name__ == '__main__':
    main()
