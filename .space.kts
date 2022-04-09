job("Deploy script") {
    container(displayName = "Deploy script", image = "ubuntu") {
        shellScript {
            content = """
                echo Hello
                echo World!
            """
        }
    }
}